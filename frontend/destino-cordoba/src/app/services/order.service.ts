import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  saveOrder(order: Order): Observable<any> {
    return this.http.post('http://localhost:8000/orders/', order);
  }

  getOrders() : Observable<any>{
    return this.http.get('http://localhost:8000/orders/');
  }

  getOrdersByClient(id : number) : Observable<any>{
    return this.http.get(`http://localhost:8000/orders/client/${id}`);
  }

  getOrdersByID(id : number) : Observable<any>{
    return this.http.get(`http://localhost:8000/orders/${id}`);
  }
}
