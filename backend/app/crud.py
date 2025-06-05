# backend/app/crud.py
from sqlalchemy.orm import Session
from . import models, schemas

def get_companies(db: Session):
    return db.query(models.Company).all()

def create_company(db: Session, company: schemas.CompanyCreate):
    db_company = models.Company(**company.dict())
    db.add(db_company)
    db.commit()
    db.refresh(db_company)
    return db_company
