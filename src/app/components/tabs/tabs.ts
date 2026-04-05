import {Component, OnInit} from '@angular/core';
import {Tabs2Module} from '@coreui/angular';
import {TabPanel} from '../tab-panel/tab-panel';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-tabs',
  imports: [Tabs2Module, TabPanel, DatePipe],
  standalone: true,
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs  implements OnInit {
  weeks = [
    {
      key: 0,
      start: new Date(2026, 2, 30),
      end: new Date(2026, 3, 5),
      title: 'Fundamentos de la Inteligencia Artificial',
      points: ['¿Qué es la Inteligencia Artificial?', 'Agente inteligente', 'Componenetes', 'Caso práctico: El "Grifo inteligente"'],
      summary: 'La presentación explica los fundamentos de la inteligencia artificial (IA), definiéndola como la capacidad de las máquinas para realizar tareas que normalmente requieren inteligencia humana. Se aborda el concepto de agente inteligente como unidad básica de la IA, destacando su capacidad de percibir el entorno mediante sensores, procesar información a través de lógica (software) y actuar mediante actuadores. Además, se diferencia entre agentes individuales y sistemas inteligentes complejos, y se resalta la integración entre hardware y software como base de la IA. Finalmente, se presenta un caso práctico denominado “grifo inteligente” para ilustrar la aplicación de estos conceptos en la vida real.',
      resourceLink: 'https://canva.link/i63aqe40itdvqhb',
      labLink: '',
      workLink: 'https://drive.google.com/file/d/1re6OqihvjUcWOMBYFBck_-7-YTQHQ_33/view?usp=drive_link'
    },
    {
      key: 1,
      start: new Date(2026, 3, 6),
      end: new Date(2026, 3, 12),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 2,
      start: new Date(2026, 3, 13),
      end: new Date(2026, 3, 19),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 3,
      start: new Date(2026, 3, 20),
      end: new Date(2026, 3, 26),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 4,
      start: new Date(2026, 3, 27),
      end: new Date(2026, 4, 3),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 5,
      start: new Date(2026, 4, 4),
      end: new Date(2026, 4, 10),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 6,
      start: new Date(2026, 4, 11),
      end: new Date(2026, 4, 17),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 7,
      start: new Date(2026, 4, 18),
      end: new Date(2026, 4, 24),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 8,
      start: new Date(2026, 4, 25),
      end: new Date(2026, 4, 31),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 9,
      start: new Date(2026, 5, 1),
      end: new Date(2026, 5, 7),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 10,
      start: new Date(2026, 5, 8),
      end: new Date(2026, 5, 14),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 11,
      start: new Date(2026, 5, 15),
      end: new Date(2026, 5, 21),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 12,
      start: new Date(2026, 5, 22),
      end: new Date(2026, 5, 28),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 13,
      start: new Date(2026, 5, 29),
      end: new Date(2026, 6, 5),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 14,
      start: new Date(2026, 6, 6),
      end: new Date(2026, 6, 12),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
    {
      key: 15,
      start: new Date(2026, 6, 13),
      end: new Date(2026, 6, 19),
      title: 'Introducción a Angular',
      points: ['Componentes', 'Directivas', 'Servicios'],
      summary: 'En esta clase veremos los fundamentos de Angular.',
      resourceLink: 'https://angular.io/docs',
      labLink: 'https://stackblitz.com/angular-lab',
      workLink: 'https://github.com/tu-repo/trabajo-angular'
    },
  ]

  activeWeekKey = 0;
  today = new Date();

  ngOnInit() {
    this.setActiveWeek();
  }

  setActiveWeek() {
    const current = this.weeks.find(w =>
      this.today >= w.start && this.today <= w.end
    );
    if (current) {
      this.activeWeekKey = current.key;
    }
  }

}
