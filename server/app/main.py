from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from . import crud, models
from .database import SessionLocal, engine
from . import schemas

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def root():
    return "works"


@app.get("/payments")
def get_payments(db: Session = Depends(get_db)):
    return crud.get_payments(db)


@app.get("/todos")
def get_todos(db: Session = Depends(get_db)):
    return crud.get_todos(db)


@app.get("/posts")
def get_posts(db: Session = Depends(get_db)):
    return crud.get_posts(db)


@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    return crud.get_users(db)


@app.post("/payments")
def post_payment(body: schemas.Payment, db: Session = Depends(get_db)):
    return crud.create_payment(db, body)


@app.post("/todos")
def post_todo(body: schemas.ToDo, db: Session = Depends(get_db)):
    return crud.create_todo(db, body)


@app.post("/posts")
def post_board_post(body: schemas.Post, db: Session = Depends(get_db)):
    return crud.create_post(db, body)


@app.post("/users")
def post_user(body: schemas.User, db: Session = Depends(get_db)):
    return crud.create_user(db, body)


@app.patch("/payments/{id}")
def patch_payment(id: int,
                  body: schemas.Payment,
                  db: Session = Depends(get_db)):
    return crud.update_payment(db, id, body)


@app.patch("/todos/{id}")
def patch_todo(id: int, body: schemas.ToDo, db: Session = Depends(get_db)):
    return crud.update_todo(db, id, body)


@app.patch("/posts/{id}")
def patch_post(id, body: schemas.Post, db: Session = Depends(get_db)):
    return crud.update_post(db, id, body)


@app.patch("/users/{id}")
def patch_users(id, body: schemas.User, db: Session = Depends(get_db)):
    return crud.update_user(db, id, body)


@app.delete("/posts/{id}")
def delete_post(id: int, db: Session = Depends(get_db)):
    return crud.delete_post(db, id)
