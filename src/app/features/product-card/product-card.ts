import { Component, Input, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() product!: Product;
  
  protected selectedSize = signal<'250ml' | '1L'>('1L');
  
  protected get currentPrice(): number {
    if (this.product.hasMultipleSizes && this.product.sizes) {
      const selected = this.product.sizes.find(s => s.size === this.selectedSize());
      return selected ? selected.price : this.product.price;
    }
    return this.product.price;
  }
  
  protected selectSize(size: '250ml' | '1L'): void {
    this.selectedSize.set(size);
  }
  
  protected get whatsappMessage(): string {
    const productName = this.product.name;
    const size = this.product.hasMultipleSizes ? ` (${this.selectedSize()})` : '';
    const price = this.currentPrice;
    return `Bonjour ! Je souhaite commander ${productName}${size} - ${price} FCFA`;
  }
}
