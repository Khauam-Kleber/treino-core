export interface IBaseService<T> {
 
    
  findAll();
  findOne(id: string);
  update(entity: T);
  create(entity: T);
  delete(id: string);
}