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


def update_payment(db: Session, body):
    payment = models.User(id=body.id)
    db.add(payment)
    db.commit()
    db.refresh(payment)
    return payment


def update_todo(db: Session, body):
    todo = models.Todo(id=body.id)
    db.add(todo)
    db.commit()
    db.refresh(todo)
    return todo


def update_post(db: Session, body):
    post = models.User(id=body.id)
    db.add(post)
    db.commit()
    db.refresh(post)
    return post


def update_user(db: Session, body):
    user = models.User(id=body.id)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def delete_post(db: Session, body):
    post = db.query().filter(models.Post.id == body.id).first()
    db.delete(post)
    db.commit()
