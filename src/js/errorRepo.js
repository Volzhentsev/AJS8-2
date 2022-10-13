export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [404, 'not found'],
      [502, 'bad gateway'],
      [200, 'ok'],
      [201, 'created'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    throw new Error('Unknown error');
  }
}
