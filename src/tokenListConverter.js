export default {
  fromAttribute: value => value.split(/\s+/),
  toAttribute: value => value.join(' '),
};
