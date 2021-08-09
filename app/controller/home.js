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
    ctx.body = res;
  }
}

module.exports = HomeController;
