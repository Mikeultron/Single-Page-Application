import AbstractView from './AbstractView.js';

export default class extends AbstractView{
  constructor(params){
    super(params);
    this.setTitle('Viewing Post');
  }

  async getHtml(){
    return `
      <h1Posts</h1>
      <p>You are viewing the posts</p>
    `;
  }
}