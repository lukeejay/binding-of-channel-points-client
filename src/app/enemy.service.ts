import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Enemy } from './enemy';


@Injectable({
  providedIn: 'root'
})

export class EnemyService {

  private enemiesUrl = 'http://localhost:3000/assets/enemies';

  private teamObservble = new Subject<String>();

  constructor(private http: HttpClient) { }

  getEnemies(): Observable<Enemy[]> {
    return this.http.get<Enemy[]>(this.enemiesUrl);
  }
}