(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    5390: function (e, r, t) {
      'use strict';
      function n(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      t.r(r),
        t.d(r, {
          default: function () {
            return p;
          },
        });
      t(4090);
      var o = t(3598),
        a = t(5893);
      var s = function () {
        return (0, a.jsxs)('header', {
          className: 'main-header',
          children: [
            (0, a.jsx)('div', {
              className: 'header-search',
              children: (0, a.jsx)(o.Z, {}),
            }),
            (0, a.jsx)('div', {
              className: 'logo',
              children: (0, a.jsx)('a', {
                href: '/pokefetch',
                className: 'logo-link',
                title: 'home',
                children: (0, a.jsx)('img', {
                  src: '/pokefetch/images/pokeball.png',
                  alt: 'pokemon pokeball',
                  className: 'logo-image',
                }),
              }),
            }),
            (0, a.jsx)('div', { className: 'header-right' }),
          ],
        });
      };
      var c = function () {
          return (0, a.jsx)('footer', {
            className: 'main-footer',
            children: (0, a.jsxs)('div', {
              className: 'container',
              children: [
                (0, a.jsx)('a', {
                  href: 'https://praqo.org/',
                  className: 'footer-link',
                  children: '@praqo \u2197',
                }),
                (0, a.jsx)('a', {
                  href: 'https://pokeapi.co/',
                  className: 'footer-link',
                  children: 'Data Used \u2197',
                }),
              ],
            }),
          });
        },
        i = t(1163);
      function u(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function l(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? u(Object(t), !0).forEach(function (r) {
                n(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var p = function (e) {
        var r = e.Component,
          t = e.pageProps,
          n = (0, i.useRouter)();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            '/' !== n.pathname && (0, a.jsx)(s, {}),
            (0, a.jsx)(r, l({}, t)),
            (0, a.jsx)(c, {}),
          ],
        });
      };
    },
    3598: function (e, r, t) {
      'use strict';
      var n = t(1163),
        o = t(7294),
        a = t(5893);
      r.Z = function () {
        var e = (0, o.useState)(''),
          r = e[0],
          t = e[1],
          s = (0, n.useRouter)();
        return (0, a.jsxs)('form', {
          onSubmit: function (e) {
            console.log(r.split('')),
              e.preventDefault(),
              r.replace(/ /g, '')
                ? (s.push('/search?pokemon='.concat(r.toLowerCase().trim())),
                  t(''))
                : t('');
          },
          className: 'hero-form',
          children: [
            (0, a.jsx)('input', {
              type: 'text',
              value: r,
              onChange: function (e) {
                return t(e.currentTarget.value);
              },
              required: !0,
            }),
            (0, a.jsx)('button', { type: 'submit', children: 'search' }),
          ],
        });
      };
    },
    1780: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return t(5390);
        },
      ]);
    },
    4090: function () {},
    1163: function (e, r, t) {
      e.exports = t(4651);
    },
  },
  function (e) {
    var r = function (r) {
      return e((e.s = r));
    };
    e.O(0, [774, 179], function () {
      return r(1780), r(4651);
    });
    var t = e.O();
    _N_E = t;
  },
]);
