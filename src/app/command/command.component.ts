import { Component, OnInit } from '@angular/core';
import { Enemy } from '../enemy';
import { EnemyService } from '../enemy.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  enemies: Enemy[] = [];
  editMode = false;
  
  constructor(private enemyService: EnemyService) {
    this.enemyService.getEnemies().subscribe( (enemies) => this.enemies = enemies)
   }

  ngOnInit(): void {
  }

  toggleEditMode() {
    this.editMode = !this.editMode
    console.log(this.editMode)
  }

}
