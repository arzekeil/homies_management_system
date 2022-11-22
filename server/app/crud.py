from sqlalchemy.orm import Session
from . import models


def get_payments(db: Session):
    return db.query(models.Payment).all()


def get_todos(db: Session):
    return db.query(models.Todo).all()


def get_posts(db: Session):
    return db.query(models.Post).all()


def get_users(db: Session):
    return db.query(models.User).all()


def create_payment(db: Session, body):
    payment = models.Payment(amount=body.amount,
                             title=body.title,
                             date=body.date,
                             transactionId=body.transactionId,
                             userId=body.userId,
                             paid=body.paid)

    db.add(payment)
    db.commit()
    db.refresh(payment)
    return payment


def create_todo(db: Session, body):
    todo = models.Todo(
        title=body.title,
        dueDate=body.dueDate,
        userId=body.userId,
        isCompleted=body.isCompleted,
    )
    db.add(todo)
    db.commit()
    db.refresh(todo)
    return todo


def create_post(db: Session, body):
    post = models.Post(
        title=body.title,
        date=body.date,
        userId=body.userId,
        description=body.description,
    )
    db.add(post)
    db.commit()
    db.refresh(post)
    return post


def create_user(db: Session, body):
    user = models.User(
        firstName=body.firstName,
        lastName=body.lastName,
        icon=body.icon,
        color=body.color,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def update_payment(db: Session, id, body):
    payment = db.query(models.Payment).filter(models.Payment.id == id).first()

    if payment:
        payment.transactionId = body.transactionId
        payment.date = body.date
        payment.paid = body.paid
        payment.amount = body.amount
        payment.title = body.title
        payment.userId = body.userId

        db.commit()
        return db.query(models.Payment).filter(models.Payment.id == id).first()

    return "no payment with id " + str(id)


def update_todo(db: Session, id, body):
    todo = db.query(models.Todo).filter(models.Todo.id == id).first()

    if todo:
        todo.userId = body.userId
        todo.isCompleted = body.isCompleted
        todo.title = body.title
        todo.dueDate = body.dueDate

        db.commit()
        return db.query(models.Todo).filter(models.Todo.id == id).first()

    return "no task with id " + str(id)


def update_post(db: Session, id, body):
    post = db.query(models.Post).filter(models.Post.id == id).first()

    if post:
        post.title = body.title
        post.date = body.date
        post.description = body.description
        post.userId = body.userId

        db.commit()
        return db.query(models.Post).filter(models.Post.id == id).first()

    return "no post with id " + str(id)


def update_user(db: Session, id, body):
    user = db.query(models.User).filter(models.User.id == id).first()

    if user:
        user.firstName = body.firstName
        user.lastName = body.lastName
        user.icon = body.icon
        user.color = body.color

        db.commit()
        return db.query(models.User).filter(models.User.id == id).first()

    return "no user with id " + str(id)


def delete_post(db: Session, id):
    post = db.query(models.Post).filter(models.Post.id == id).first()

    if post:
        db.delete(post)
        db.commit()
        return "post with id " + str(id) + " deleted"
    else:
        return "no such post with id " + str(id)
