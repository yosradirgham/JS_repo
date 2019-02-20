const expect    = require('expect');
const request = require('supertest');
const {app} = require('./../server');
const {mongoose} = require('../db/mongoose');
const {Todo} = require('./../models/todo');
const {ObjectID} = require('mongodb');

var todos = [{
  _id : new ObjectID("5c6a69206f445b021b441cd1"),
  text : 'walk the dog'
}, {
  _id : new ObjectID("5c6a69206f445b021b441cd2"),
  text : 'read a book'
},{
  _id : new ObjectID("5c6a69206f445b021b441cd3"),
  text : 'Finish this course'
}];

beforeEach(done => {
  Todo.remove({})
  .then(()=> Todo.insertMany(todos))
  .then(()=> done());
});


describe('Post /todos',()=>{
    it('Should create a new todo',(done)=>{
      var text = 'Finish this course';
      request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect(res=>{
        expect(res.body.text).toBe(text);
      })
      .end((err,res)=>{
        if(err) return done(err);
        Todo.find().then(todos => {
          expect(todos.length).toBe(4);
          expect(todos[3].text).toBe(text);
          done();
        }).catch(e => done(e));
      });
    });

    it('Should not create todo with invalid body data',(done)=>{
      request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err,res)=>{
        if(err) return done(err);
        Todo.find().then(todos => {
          expect(todos.length).toBe(3);
          done();
        }).catch(e => done(e));
      });
    });
});

describe('GET /todos',()=>{
  it('Should get a list of todos',(done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect(res => expect(res.body.length).toBe(3))
    .end((err,res)=>{
      if(err) return done(err);
      Todo.find().then( docs => {
        expect(docs.length).toBe(3);
        expect(docs[0].text).toBe('walk the dog');
        done();
      }).catch(e => done(e));
    });
  });
});

describe('GET /todos/:id',()=>{
  it('Should get a todo by Id',(done)=>{
    request(app)
    .get(`/todos/${todos[0]._id.toHexString()}`)
    .expect(200)
    .expect(res => expect(res.body.doc.text).toBe('walk the dog'))
    .end(done);
  });
  it('Should return 404 when Id is not valid',(done)=>{
    request(app)
    .get(`/todos/${todos[0]._id.toHexString()}1`)
    .expect(404)
    .end(done);
  });
  it('Should get 404 http status code when ID is valid but does not exist',(done)=>{
    request(app)
    .get(`/todos/5c6a69206f445b021b441cd4`)
    .expect(404)
    .end(done);
  });
});


describe('Delete /todos/:id',()=>{
  it('Should delete a todo by its id',(done)=>{
    request(app)
    .delete(`/todos/${todos[0]._id}`)
    .expect(200)
    .expect(res => expect(res.body.text).toBe('walk the dog'))
    .end(done);
  });
  it('Should return 404 status code if id is invalid',(done)=>{
    request(app)
    .delete('/todos/523c6a69206f445b021b441cd1')
    .expect(404)
    .end(done);
  });
  it('Should return 404 if todo not found',(done)=>{
    request(app)
    .delete('/todos/5c6a69206f445b021b441cd9')
    .expect(404)
    .end(done);
  });
});
