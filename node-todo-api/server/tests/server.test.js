const expect    = require('expect');
const request = require('supertest');

const {app} = require('./../server');

const {mongoose} = require('../db/mongoose');
const {Todo} = require('./../models/todo');

var todos = [{
  text : 'walk the dog'
}, {
  text : 'read a book'
},{
  text : 'Finish this course'
}];

beforeEach(done => {
  Todo.remove({})
  .then(()=> Todo.insertMany(todos))
  .then(()=> done());
});


describe('Post /todos',()=>{

  describe('todo created',()=>{
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
        }).catch(e =>{
          done(e);
        });
      });
    });
  });

  describe('correct data sent',()=>{
    it('Should not create todo with invalid body data',(done)=>{

      request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err,res)=>{
        if(err) return done(err);
        Todo.find().then(todos =>{
          console.log(todos.length);
          expect(todos.length).toBe(3);
          done();
        }).catch(e=>{
          done(e);
        });
      });
    });
  });

describe('GET /todos',()=>{

  it('Should get a list of todos',(done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect(res => {
      expect(res.body.docs.length).toBe(3);
    })
    .end((err,res)=>{
      if(err) return done(err);
      Todo.find()
      .then( docs => {
        expect(docs.length).toBe(3);
        expect(docs[0].text).toBe('walk the dog');
        done();
      }).catch(e =>
        done(e));
    });
  });

});

});
