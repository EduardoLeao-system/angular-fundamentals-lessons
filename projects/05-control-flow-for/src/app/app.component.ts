import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="container">
      @for (car of carList; track car) {
      <article class="listing">
        <div class="image-parent">
          <img class="product-image"  src="{{car.image}}" />
        </div>
        
        <section class="details">
          <p class="title">{{ car.make }} {{ car.model }}</p>
          
          <hr />
          <p class="detail">
            <span>Ano</span>
            <span>{{ car.year}}</span>
            
          </p>
          <div class="detail">
            <span>Transmissão</span>
            <span>{{car.transmission}}</span>
          </div>
          <p class="detail">
            <span>Quilometragem</span>
            <span>{{ car.miles }}</span>
          </p>
          <p class="detail">
            <span>Preço</span>
            <span>{{ car.price }}</span>
          </p>
        </section>
      </article>
      
     } @empty {
     <p>SEM CONTEUDO DISPONIVEL</p>
    }
    </section>
  `,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  carList = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatico',
      image: '../assets/red-car.jpeg',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
      image: '../assets/blue-car.jpeg',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
      image: '../assets/blue-car.jpeg',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
      image: '../assets/red-car.jpeg',
    },
  ];
}
