import _ from 'lodash';

export default function paginate(totalImgs, currentPage, pageSize) {
  let startIndex = (currentPage - 1) * pageSize;
  const paginatedMovies = _(totalImgs).slice(startIndex).take(pageSize).value();
  return paginatedMovies;
}
