import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let logs = [
      {
        id: 0,
        title: 'Log One',
        body:
          'lorem ipsum dolar sit amet ver mir konst eir unst favar pero mucho singular porta convoy',
        date: new Date('October 13, 2018')
      },
      {
        id: 1,
        title: 'Log Two',
        body:
          'lorem ipsum dolar sit amet ver mir konst eir unst favar pero mucho singular porta convoy',
        date: new Date('October 15, 2018')
      },
      {
        id: 2,
        title: 'Log Three',
        body:
          'lorem ipsum dolar sit amet ver mir konst eir unst favar pero mucho singular porta convoy',
        date: new Date('October 16, 2018')
      },
      {
        id: 3,
        title: 'Log Four',
        body:
          'lorem ipsum dolar sit amet ver mir konst eir unst favar pero mucho singular porta convoy',
        date: new Date('November 01, 2018')
      },
      {
        id: 4,
        title: 'Log Five',
        body:
          'lorem ipsum dolar sit amet ver mir konst eir unst favar pero mucho singular porta convoy',
        date: new Date('November 04, 2018')
      }
    ];
    return { logs };
  }
}
