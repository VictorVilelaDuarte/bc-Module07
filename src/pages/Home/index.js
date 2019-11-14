import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-reebok-legacy-lifter-crossfit-power-weight-lifting-lpo/06/D19-3706-006/D19-3706-006_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          {' '}
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-reebok-legacy-lifter-crossfit-power-weight-lifting-lpo/06/D19-3706-006/D19-3706-006_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          {' '}
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-reebok-legacy-lifter-crossfit-power-weight-lifting-lpo/06/D19-3706-006/D19-3706-006_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          {' '}
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-reebok-legacy-lifter-crossfit-power-weight-lifting-lpo/06/D19-3706-006/D19-3706-006_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          {' '}
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-reebok-legacy-lifter-crossfit-power-weight-lifting-lpo/06/D19-3706-006/D19-3706-006_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          {' '}
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-reebok-legacy-lifter-crossfit-power-weight-lifting-lpo/06/D19-3706-006/D19-3706-006_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          {' '}
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
