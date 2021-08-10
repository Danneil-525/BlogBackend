'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'HELLO DANIEL';
  }
  async getArticleList() {
    const { ctx } = this;
    const sql =
      `SELECT article.id,
      title,
      introduce,
      addTime,
      view_count,
      typeName
      FROM article LEFT JOIN type ON article.type_id = type.id
      `;
    const res = await this.app.mysql.query(sql);
    console.log(res);
    ctx.body = { data: res };
  }

  async getArticleById() {
    const { ctx } = this;
    const id = this.ctx.params.id;
    const sql = `
    SELECT article.id,
      title,
      introduce,
      article_content,
      addTime,
      view_count,
      typeName,
      type.id as typeId,
      FROM article LEFT JOIN type ON article.type_id = type.id
      WHERE article.id=${id}
    `;
    const res = await this.app.mysql.query(sql);
    ctx.body = { data: res };
  }
}

module.exports = HomeController;
