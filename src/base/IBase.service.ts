export interface IBaseService<T> {
    
  findAll();
  get(id: number);
  update(entity: T);
  create(entity: T);
  delete(id: number);
}