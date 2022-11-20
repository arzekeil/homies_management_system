from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/payments")
def get_payments(db: Session = Depends(get_db)):
    pass
@app.get("/todos")
def get_todos(db: Session = Depends(get_db)):
    pass
@app.get("/board_posts")
def get_board_posts(db: Session = Depends(get_db)):
    pass
@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    pass
@app.post("payment")
def post_payment(db: Session = Depends(get_db)):
    pass
@app.post("/todo")
def post_todo(db: Session = Depends(get_db)):
    pass
@app.post("board_post")
def post_board_post(db: Session = Depends(get_db)):
    pass
@app.post("/user")
def post_user(db: Session = Depends(get_db)):
    pass
@app.patch("payment/{id}")
def patch_payment(id, db: Session = Depends(get_db)):
    pass
@app.patch("todo/{id}")
def patch_todo(id, db: Session = Depends(get_db)):
    pass
@app.patch("board_post/{id}")
def patch_board_post(id, db: Session = Depends(get_db)):
    pass
@app.patch("user/{id}")
def patch_user(id, db: Session = Depends(get_db)):
    pass
@app.delete("board_post/{id}")
def delete_board_post(id, db: Session = Depends(get_db)):
    pass
