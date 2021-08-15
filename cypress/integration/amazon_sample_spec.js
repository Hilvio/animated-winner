import HomePage from '../elements/pages/HomePage';

describe('The search results', () => {
    it('can be sorted', () => {
        const search = new HomePage()
            .visit()
            .navbar.search('Nikon');

        const productPage = search
            .sort()
            .selectProduct(1);

        productPage.assertTitle('Nikon D D800E');
    })
  })