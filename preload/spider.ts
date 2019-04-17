import Axios from 'axios';
import { load } from 'cheerio';

// http://www.doutula.com/
// https://www.fabiaoqing.com/

const Http = Axios.create({
  baseURL: `https://fabiaoqing.com/`
});

Http.interceptors.request.use((request) => {
  return request;
}, (err) => {
  return Promise.reject(err);
});

Http.interceptors.response.use((response) => {
  return response;
}, err => {
  return Promise.reject(err);
});

export { Http }

export interface Img {
  url: string;
  name: string;
}

export interface Pagination {
  count: number;
  current: number;
  size: number;
}

export interface List {
  data: Img[];
  pagination: Pagination;
}

export class FaBiaoQing {

  getList(page: number = 1): Promise<List> {
    return Http.get(`/biaoqing/lists/page/${page}.html`)
      .then(response => {
        const $ = load(response.data);
        const $tagbqppdivs = $('.tagbqppdiv');
        const $pagination = $('.pagination');
        const data = this.getData($, $tagbqppdivs);
        const pagination = this.getPagination($pagination, $tagbqppdivs);
        return { data, pagination }
      });
  }

  query(keyword: string, page?: number) {
    return Http.get(`/search/search/keyword/${keyword}/type/bqb/page/${page}.html`)
      .then(response => {

      })
  }

  private getData($: CheerioStatic, $listWallpaper: Cheerio): Img[] {
    const data: Img[] = [];
    $listWallpaper.each((index, ele) => {
      const $img = $(ele).find('img');
      data.push({
        url: $img.data('original'),
        name: $img.attr('alt').replace('-发表情', '')
      })
    });
    return data;
  }

  private getPagination($pagination: Cheerio, $tagbqppdivs: Cheerio): Pagination {
    const $links = $pagination.children('a.item');
    let index = $links.length - 1;
    let count = Number.parseInt($links.eq(index).text());
    while (Number.isNaN(count) && index >= 0) {
      --index;
      count = Number.parseInt($links.eq(index).text());
    }
    return {
      count: count,
      current: Number($links.filter('.active').text()),
      size: $tagbqppdivs.length
    }
  }
}
