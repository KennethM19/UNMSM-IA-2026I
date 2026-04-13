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
      summary: 'La inteligencia artificial es la capacidad de las máquinas para realizar tareas que normalmente requieren inteligencia humana, combinando el procesamiento lógico del software con la ejecución física del hardware. En este contexto, el agente inteligente es la unidad básica de la IA, capaz de percibir el entorno mediante sensores y actuar mediante actuadores, tomando decisiones a partir de una unidad de proceso (software). Además, se diferencian los agentes inteligentes (elementos individuales) de los sistemas inteligentes (conjuntos complejos de múltiples agentes). Finalmente, se destacan sus componentes principales y se ejemplifica su funcionamiento con casos prácticos como un “grifo inteligente”, que responde automáticamente a estímulos del entorno.',
      resourceLink: 'https://www.canva.com/design/DAHF6sPMg4c/hCFWRHhLCjJv43Z8FbulXA/edit',
      labLink: '',
      workLink: 'https://drive.google.com/file/d/1re6OqihvjUcWOMBYFBck_-7-YTQHQ_33/view?usp=drive_link'
    },
    {
      key: 1,
      start: new Date(2026, 3, 6),
      end: new Date(2026, 3, 12),
      title: 'Agentes',
      points: ['¿Qué es un agente?', 'Conceptos', 'Tipos de agente', 'Diseño', 'Aplicaciones'],
      summary: 'Un agente inteligente es una entidad que percibe su entorno mediante sensores y actúa sobre él usando actuadores con el objetivo de tomar decisiones para cumplir una meta. Para entenderlos, se consideran conceptos como entorno, percepción, acción y racionalidad (elegir la mejor opción posible). Existen varios tipos de agentes, como los reactivos, basados en modelo, en objetivos, en utilidad y de aprendizaje. Para diseñar uno, se deben definir su objetivo, el entorno donde operará, el tipo de agente, sus sensores y acciones, y cómo tomará decisiones (reglas o aprendizaje). Estos agentes se aplican en diferentes campos como la robótica, autos autónomos, videojuegos, asistentes virtuales, medicina y finanzas.',
      resourceLink: 'https://canva.link/tyknlshks0afjk0',
      labLink: '',
      workLink: ''
    },
    {
      key: 2,
      start: new Date(2026, 3, 13),
      end: new Date(2026, 3, 19),
      title: 'MÉTODOS DE BÚSQUEDA',
      points: ['La búsqueda como método de resolución de problemas.', 'El Espacio de Estados', 'Búsqueda Ciega (No informada)', 'Búsqueda Informada (Heurística)'],
      summary: 'Los métodos de búsqueda en inteligencia artificial son técnicas utilizadas para resolver problemas mediante la exploración de un conjunto de estados, definidos a partir de un estado inicial, acciones posibles, un modelo de transición, una prueba de objetivo y un costo asociado. Dentro de este enfoque, el espacio de estados representa todas las configuraciones alcanzables. Existen dos tipos principales: la búsqueda ciega, que no utiliza información adicional para guiarse (como BFS, DFS y costo uniforme), y la búsqueda informada, que emplea heurísticas para optimizar la exploración (como A* y la búsqueda voraz). Estos métodos se aplican en distintos contextos, como el procesamiento de grafos y la robótica, donde la eficiencia y la optimización en la toma de decisiones son fundamentales.',
      resourceLink: 'https://canva.link/91bqd3e3u8pejkj',
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
