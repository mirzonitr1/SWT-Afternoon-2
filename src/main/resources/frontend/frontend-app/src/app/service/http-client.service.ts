import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../components/hotel-list/hotel.model";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/hotels';
  }
  public findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.usersUrl);
  }
  public save(hotel: Hotel) {
    return this.http.post<Hotel>(this.usersUrl, Hotel);
  }
}
