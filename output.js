//Mon Sep 30 2024 07:02:38 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
"use strict";

(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([[57], {
  9656: function (Le, ue, s) {
    s.r(ue), s.d(ue, {
      default: function () {
        return Qe;
      }
    });
    var ve = s(26068),
      D = s.n(ve),
      ce = s(48305),
      j = s.n(ce),
      he = s(90228),
      i = s.n(he),
      pe = s(87999),
      h = s.n(pe),
      g = s(67807),
      A = "93eefc4a-12ed-49f7-93de-5ff3667bb9de",
      fe = [{
        label: "\u6D59\u6C5F\u7701",
        value: "ZJ"
      }, {
        label: "\u5317\u4EAC\u5E02",
        value: "BJ"
      }, {
        label: "\u4E0A\u6D77\u5E02",
        value: "SH"
      }, {
        label: "\u5929\u6D25\u5E02",
        value: "TJ"
      }, {
        label: "\u91CD\u5E86\u5E02",
        value: "CQ"
      }, {
        label: "\u6CB3\u5317\u7701",
        value: "HB"
      }, {
        label: "\u5C71\u897F\u7701",
        value: "SX"
      }, {
        label: "\u8FBD\u5B81\u7701",
        value: "LN"
      }, {
        label: "\u5409\u6797\u7701",
        value: "JL"
      }, {
        label: "\u9ED1\u9F99\u6C5F\u7701",
        value: "HLJ"
      }, {
        label: "\u6C5F\u82CF\u7701",
        value: "JS"
      }, {
        label: "\u5B89\u5FBD\u7701",
        value: "AH"
      }, {
        label: "\u798F\u5EFA\u7701",
        value: "FJ"
      }, {
        label: "\u6C5F\u897F\u7701",
        value: "JX"
      }, {
        label: "\u5C71\u4E1C\u7701",
        value: "SD"
      }, {
        label: "\u6CB3\u5357\u7701",
        value: "HN"
      }, {
        label: "\u6E56\u5317\u7701",
        value: "HB"
      }, {
        label: "\u6E56\u5357\u7701",
        value: "HN"
      }, {
        label: "\u5E7F\u4E1C\u7701",
        value: "GD"
      }, {
        label: "\u6D77\u5357\u7701",
        value: "HN"
      }, {
        label: "\u56DB\u5DDD\u7701",
        value: "SC"
      }, {
        label: "\u8D35\u5DDE\u7701",
        value: "GZ"
      }, {
        label: "\u4E91\u5357\u7701",
        value: "YN"
      }, {
        label: "\u9655\u897F\u7701",
        value: "SN"
      }, {
        label: "\u7518\u8083\u7701",
        value: "GS"
      }, {
        label: "\u9752\u6D77\u7701",
        value: "QH"
      }, {
        label: "\u53F0\u6E7E\u7701",
        value: "TW"
      }, {
        label: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        value: "NM"
      }, {
        label: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        value: "GX"
      }, {
        label: "\u897F\u85CF\u81EA\u6CBB\u533A",
        value: "XZ"
      }, {
        label: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
        value: "NX"
      }, {
        label: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        value: "XJ"
      }, {
        label: "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A",
        value: "HK"
      }, {
        label: "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A",
        value: "MO"
      }],
      me = [{
        label: "\u662F",
        value: "1"
      }, {
        label: "\u5426",
        value: "0"
      }],
      be = [{
        label: "\u89C2\u5149/\u6E38\u89C8",
        value: "Tourism"
      }, {
        label: "\u4F11\u95F2/\u5EA6\u5047",
        value: "Vacation"
      }, {
        label: "\u5176\u4ED6",
        value: "Other"
      }, {
        label: "\u5546\u52A1",
        value: "Business"
      }, {
        label: "\u63A2\u4EB2\u8BBF\u53CB",
        value: "Visit"
      }];
    function ge(t) {
      var e,
        u,
        a,
        T = (e = fe.find(function (l) {
          return l.label === t.province;
        })) === null || e === undefined ? undefined : e.value,
        v = (u = be.find(function (l) {
          return l.label === t.purpose;
        })) === null || u === undefined ? undefined : u.value,
        C = (a = me.find(function (l) {
          return l.label === t.overnight;
        })) === null || a === undefined ? undefined : a.value;
      return D()(D()({}, t), {}, {
        province: T || t.province,
        purpose: v || t.purpose,
        overnight: C || t.overnight,
        display: t.display,
        greater: t.greater,
        less: t.less
      });
    }
    function ye(t, e) {
      return k.apply(this, arguments);
    }
    function k() {
      return k = h()(i()().mark(function t(e, u) {
        var a;
        return i()().wrap(function (v) {
          for (;;) switch (v.prev = v.next) {
            case 0:
              return a = ge({
                province: e.province || "",
                purpose: e.purpose || "",
                overnight: e.overnight || "",
                display: e.display !== undefined ? e.display : "",
                greater: e.greater || "",
                less: e.less || ""
              }), v.abrupt("return", (0, g.request)("/api/query", D()({
                method: "GET",
                params: D()(D()({}, a), {}, {
                  current: e.current,
                  pageSize: e.pageSize,
                  table_name: u == null ? undefined : u.table_name
                }),
                headers: {
                  Authorization: "Bearer ".concat(A)
                }
              }, u || {})));
            case 2:
            case "end":
              return v.stop();
          }
        }, t);
      })), k.apply(this, arguments);
    }
    function we(t) {
      return J.apply(this, arguments);
    }
    function J() {
      return J = h()(i()().mark(function t(e) {
        return i()().wrap(function (a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return a.abrupt("return", (0, g.request)("/api/query", {
                method: "POST",
                params: {
                  table_name: e == null ? undefined : e.table_name
                },
                data: D()({
                  method: "delete"
                }, e || {}),
                headers: {
                  Authorization: "Bearer ".concat(A)
                }
              }));
            case 1:
            case "end":
              return a.stop();
          }
        }, t);
      })), J.apply(this, arguments);
    }
    function Te(t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return Y = h()(i()().mark(function t(e) {
        return i()().wrap(function (a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return a.abrupt("return", (0, g.request)("/api/query", {
                method: "POST",
                params: {
                  table_name: e == null ? undefined : e.table_name
                },
                data: D()({
                  method: "recover"
                }, e || {}),
                headers: {
                  Authorization: "Bearer ".concat(A)
                }
              }));
            case 1:
            case "end":
              return a.stop();
          }
        }, t);
      })), Y.apply(this, arguments);
    }
    function Ce(t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return Q = h()(i()().mark(function t(e) {
        return i()().wrap(function (a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return a.abrupt("return", (0, g.request)("/api/total", {
                method: "GET",
                params: {
                  table_name: e == null ? undefined : e.table_name
                },
                headers: {
                  Authorization: "Bearer ".concat(A)
                }
              }));
            case 1:
            case "end":
              return a.stop();
          }
        }, t);
      })), Q.apply(this, arguments);
    }
    function Se(t) {
      return L.apply(this, arguments);
    }
    function L() {
      return L = h()(i()().mark(function t(e) {
        return i()().wrap(function (a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return a.abrupt("return", (0, g.request)("/api/costs", {
                method: "GET",
                params: {
                  table_name: e == null ? undefined : e.table_name
                },
                headers: {
                  Authorization: "Bearer ".concat(A)
                }
              }));
            case 1:
            case "end":
              return a.stop();
          }
        }, t);
      })), L.apply(this, arguments);
    }
    function We(t) {
      return W.apply(this, arguments);
    }
    function W() {
      return W = _asyncToGenerator(_regeneratorRuntime().mark(function t(e) {
        return _regeneratorRuntime().wrap(function (a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return a.abrupt("return", request("/api/avg_overnight_days", {
                method: "GET",
                params: {
                  table_name: e == null ? undefined : e.table_name
                },
                headers: {
                  Authorization: "Bearer ".concat(A)
                }
              }));
            case 1:
            case "end":
              return a.stop();
          }
        }, t);
      })), W.apply(this, arguments);
    }
    function De(t) {
      return X.apply(this, arguments);
    }
    function X() {
      return X = h()(i()().mark(function t(e) {
        return i()().wrap(function (a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return a.abrupt("return", (0, g.request)("/api/cost_composition", {
                method: "GET",
                params: {
                  table_name: e == null ? undefined : e.table_name,
                  overnight: e == null ? undefined : e.overnight
                },
                headers: {
                  Authorization: "Bearer ".concat(A)
                }
              }));
            case 1:
            case "end":
              return a.stop();
          }
        }, t);
      })), X.apply(this, arguments);
    }
    function Xe(t) {
      return K.apply(this, arguments);
    }
    function K() {
      return K = _asyncToGenerator(_regeneratorRuntime().mark(function t(e) {
        return _regeneratorRuntime().wrap(function (a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return a.abrupt("return", request("/api/tour_ratio", {
                method: "GET",
                params: {
                  table_name: e == null ? undefined : e.table_name
                },
                headers: {
                  Authorization: "Bearer ".concat(A)
                }
              }));
            case 1:
            case "end":
              return a.stop();
          }
        }, t);
      })), K.apply(this, arguments);
    }
    function je(t) {
      return V.apply(this, arguments);
    }
    function V() {
      return V = h()(i()().mark(function t(e) {
        return i()().wrap(function (a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return a.abrupt("return", (0, g.request)("/api/avg_cost_distribution", {
                method: "GET",
                params: {
                  table_name: e == null ? undefined : e.table_name
                },
                headers: {
                  Authorization: "Bearer ".concat(A)
                }
              }));
            case 1:
            case "end":
              return a.stop();
          }
        }, t);
      })), V.apply(this, arguments);
    }
    var Ae = s(78803),
      Ee = s(87067),
      xe = s(732),
      Ie = s(51841),
      Pe = s(13772),
      $e = s(63130),
      Be = s(96410),
      x = s(9370),
      Fe = s(34359),
      se = s(64347),
      Ze = s(82557),
      m = s(50959),
      U = s(77959),
      Me = s(68325),
      n = s(11527),
      Re = function () {
        var e = (0, m.useState)({
            series: [],
            labels: []
          }),
          u = j()(e, 2),
          a = u[0],
          T = u[1],
          v = (0, m.useState)(null),
          C = j()(v, 2),
          l = C[0],
          y = C[1],
          q = (0, m.useState)(null),
          Z = j()(q, 2),
          w = Z[0],
          G = Z[1],
          _ = (0, m.useState)(null),
          M = j()(_, 2),
          I = M[0],
          ee = M[1],
          R = function () {
            var c = h()(i()().mark(function b() {
              var p, $, r;
              return i()().wrap(function (o) {
                for (;;) switch (o.prev = o.next) {
                  case 0:
                    return o.prev = 0, o.next = 3, Ce({
                      table_name: "202408"
                    });
                  case 3:
                    p = o.sent, $ = p.map(function (d) {
                      return d.purpose;
                    }), r = p.map(function (d) {
                      return d.count;
                    }), T({
                      labels: $,
                      series: r
                    }), o.next = 12;
                    break;
                  case 9:
                    o.prev = 9, o.t0 = o.catch(0), x.ZP.error("Failed to fetch chart data");
                  case 12:
                  case "end":
                    return o.stop();
                }
              }, b, null, [[0, 9]]);
            }));
            return function () {
              return c.apply(this, arguments);
            };
          }(),
          ae = function () {
            var c = h()(i()().mark(function b() {
              var p;
              return i()().wrap(function (r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.prev = 0, r.next = 3, Se({
                      table_name: "202408"
                    });
                  case 3:
                    p = r.sent, y(p), r.next = 10;
                    break;
                  case 7:
                    r.prev = 7, r.t0 = r.catch(0), x.ZP.error("Failed to fetch average cost data");
                  case 10:
                  case "end":
                    return r.stop();
                }
              }, b, null, [[0, 7]]);
            }));
            return function () {
              return c.apply(this, arguments);
            };
          }(),
          N = function () {
            var c = h()(i()().mark(function b() {
              var p;
              return i()().wrap(function (r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.prev = 0, r.next = 3, De({
                      table_name: "202408"
                    });
                  case 3:
                    p = r.sent, G(p), r.next = 10;
                    break;
                  case 7:
                    r.prev = 7, r.t0 = r.catch(0), x.ZP.error("Failed to fetch cost composition data");
                  case 10:
                  case "end":
                    return r.stop();
                }
              }, b, null, [[0, 7]]);
            }));
            return function () {
              return c.apply(this, arguments);
            };
          }(),
          P = function () {
            var c = h()(i()().mark(function b() {
              var p;
              return i()().wrap(function (r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.prev = 0, r.next = 3, je({
                      table_name: "202408"
                    });
                  case 3:
                    p = r.sent, ee(p), r.next = 10;
                    break;
                  case 7:
                    r.prev = 7, r.t0 = r.catch(0), x.ZP.error("Failed to fetch average cost distribution");
                  case 10:
                  case "end":
                    return r.stop();
                }
              }, b, null, [[0, 7]]);
            }));
            return function () {
              return c.apply(this, arguments);
            };
          }();
        (0, m.useEffect)(function () {
          R(), ae(), N(), P();
        }, []);
        var O = [{
            title: "\u5404\u9879\u82B1\u8D39",
            dataIndex: "description",
            key: "description"
          }, {
            title: "\u5143",
            dataIndex: "value",
            key: "value"
          }],
          te = l ? [{
            key: "1",
            description: "\u5E73\u5747\u82B1\u8D39",
            value: l.avg_all
          }, {
            key: "2",
            description: "\u4E00\u65E5\u6E38\u5E73\u5747\u82B1\u8D39",
            value: l.avg_overnight_no
          }, {
            key: "3",
            description: "\u8FC7\u591C\u6E38\u5E73\u5747\u82B1\u8D39",
            value: l.avg_overnight_yes
          }, {
            key: "4",
            description: "\u603B\u82B1\u8D39",
            value: l.total_cost_all
          }] : [],
          z = w ? {
            labels: ["\u4F4F\u5BBF\u82B1\u8D39", "\u9910\u996E\u82B1\u8D39", "\u6E38\u89C8\u548C\u5A31\u4E50\u82B1\u8D39", "\u5BA4\u5185\u4EA4\u901A\u82B1\u8D39", "\u957F\u9014\u4EA4\u901A\u82B1\u8D39", "\u8D2D\u7269\u82B1\u8D39", "\u5176\u4ED6\u82B1\u8D39"],
            series: [w.accommodation_cost_total, w.dining_cost_total, w.entertainment_cost_total, w.local_transport_cost_total, w.long_distance_cost_total, w.shopping_cost_total, w.other_cost_total]
          } : null,
          re = I ? I.interval_distribution.map(function (c) {
            return c.y;
          }) : [],
          le = I ? I.interval_distribution.map(function (c) {
            return c.x;
          }) : [];
        return (0, n.jsxs)("div", {
          children: [I && (0, n.jsxs)("div", {
            style: {
              marginTop: "20px"
            },
            children: [(0, n.jsx)("h3", {
              children: "\u6D88\u8D39\u533A\u95F4\u5206\u5E03"
            }), (0, n.jsx)(U.Z, {
              options: {
                chart: {
                  type: "bar",
                  stacked: false
                },
                stroke: {
                  width: [0, 2]
                },
                plotOptions: {
                  bar: {
                    columnWidth: "80%",
                    colors: {
                      ranges: [{
                        from: 0,
                        to: 0,
                        color: "#FFFFFF"
                      }]
                    }
                  }
                },
                labels: le,
                yaxis: [{
                  title: {
                    text: "\u65C5\u5BA2\u6570\u91CF"
                  },
                  decimalsInFloat: 0
                }],
                xaxis: {
                  labels: {
                    show: false
                  }
                },
                dataLabels: {
                  enabled: false
                }
              },
              series: [{
                name: "\u6570\u91CF",
                type: "column",
                data: re
              }],
              type: "bar",
              height: 350
            })]
          }), (0, n.jsxs)("div", {
            className: "chart-wrap",
            children: [(0, n.jsx)("h3", {
              children: "\u51FA\u884C\u76EE\u7684\u5206\u5E03/\u4EBA"
            }), (0, n.jsx)(U.Z, {
              options: {
                chart: {
                  width: 380,
                  type: "pie"
                },
                labels: a.labels,
                legend: {
                  position: "right",
                  offsetY: 0,
                  height: 230
                }
              },
              series: a.series,
              type: "pie",
              width: 380
            })]
          }), z && (0, n.jsxs)("div", {
            style: {
              marginTop: "20px"
            },
            children: [(0, n.jsx)("h3", {
              children: "\u82B1\u8D39\u6784\u6210/\u5143"
            }), (0, n.jsx)(U.Z, {
              options: {
                chart: {
                  width: 380,
                  type: "pie"
                },
                labels: z.labels,
                legend: {
                  position: "right",
                  offsetY: 0,
                  height: 230
                }
              },
              series: z.series,
              type: "pie",
              width: 380
            })]
          }), (0, n.jsxs)("div", {
            style: {
              marginTop: "20px"
            },
            children: [(0, n.jsx)("h3", {
              children: "\u5E73\u5747\u82B1\u8D39\u7EDF\u8BA1"
            }), (0, n.jsx)(Me.Z, {
              columns: O,
              dataSource: te,
              pagination: false,
              bordered: true,
              loading: !l
            })]
          })]
        });
      },
      ze = Re,
      He = s(5726),
      Ge = s.n(He),
      Ne = [{
        label: "\u6D59\u6C5F\u7701",
        value: "\u6D59\u6C5F\u7701"
      }, {
        label: "\u5317\u4EAC\u5E02",
        value: "\u5317\u4EAC\u5E02"
      }, {
        label: "\u4E0A\u6D77\u5E02",
        value: "\u4E0A\u6D77\u5E02"
      }, {
        label: "\u5929\u6D25\u5E02",
        value: "\u5929\u6D25\u5E02"
      }, {
        label: "\u91CD\u5E86\u5E02",
        value: "\u91CD\u5E86\u5E02"
      }, {
        label: "\u6CB3\u5317\u7701",
        value: "\u6CB3\u5317\u7701"
      }, {
        label: "\u5C71\u897F\u7701",
        value: "\u5C71\u897F\u7701"
      }, {
        label: "\u8FBD\u5B81\u7701",
        value: "\u8FBD\u5B81\u7701"
      }, {
        label: "\u5409\u6797\u7701",
        value: "\u5409\u6797\u7701"
      }, {
        label: "\u9ED1\u9F99\u6C5F\u7701",
        value: "\u9ED1\u9F99\u6C5F\u7701"
      }, {
        label: "\u6C5F\u82CF\u7701",
        value: "\u6C5F\u82CF\u7701"
      }, {
        label: "\u5B89\u5FBD\u7701",
        value: "\u5B89\u5FBD\u7701"
      }, {
        label: "\u798F\u5EFA\u7701",
        value: "\u798F\u5EFA\u7701"
      }, {
        label: "\u6C5F\u897F\u7701",
        value: "\u6C5F\u897F\u7701"
      }, {
        label: "\u5C71\u4E1C\u7701",
        value: "\u5C71\u4E1C\u7701"
      }, {
        label: "\u6CB3\u5357\u7701",
        value: "\u6CB3\u5357\u7701"
      }, {
        label: "\u6E56\u5317\u7701",
        value: "\u6E56\u5317\u7701"
      }, {
        label: "\u6E56\u5357\u7701",
        value: "\u6E56\u5357\u7701"
      }, {
        label: "\u5E7F\u4E1C\u7701",
        value: "\u5E7F\u4E1C\u7701"
      }, {
        label: "\u6D77\u5357\u7701",
        value: "\u6D77\u5357\u7701"
      }, {
        label: "\u56DB\u5DDD\u7701",
        value: "\u56DB\u5DDD\u7701"
      }, {
        label: "\u8D35\u5DDE\u7701",
        value: "\u8D35\u5DDE\u7701"
      }, {
        label: "\u4E91\u5357\u7701",
        value: "\u4E91\u5357\u7701"
      }, {
        label: "\u9655\u897F\u7701",
        value: "\u9655\u897F\u7701"
      }, {
        label: "\u7518\u8083\u7701",
        value: "\u7518\u8083\u7701"
      }, {
        label: "\u9752\u6D77\u7701",
        value: "\u9752\u6D77\u7701"
      }, {
        label: "\u53F0\u6E7E\u7701",
        value: "\u53F0\u6E7E\u7701"
      }, {
        label: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        value: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A"
      }, {
        label: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        value: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A"
      }, {
        label: "\u897F\u85CF\u81EA\u6CBB\u533A",
        value: "\u897F\u85CF\u81EA\u6CBB\u533A"
      }, {
        label: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
        value: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A"
      }, {
        label: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
        value: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A"
      }, {
        label: "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A",
        value: "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A"
      }, {
        label: "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A",
        value: "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A"
      }],
      Oe = function () {
        return Ne.map(function (e) {
          return {
            label: e.label,
            value: e.value
          };
        });
      },
      ke = Oe,
      Je = function (e, u) {
        var a = (0, m.useMemo)(function () {
          return [{
            title: "ID",
            search: false,
            dataIndex: "id",
            width: 40,
            valueType: "text"
          }, {
            title: "\u586B\u62A5\u65F6\u95F4",
            search: false,
            dataIndex: "reportTime",
            width: 150,
            render: function (v, C) {
              var l = C.reportTime;
              return l ? Ge()(l * 1000).format("YYYY-MM-DD HH:mm") : "\u65E0\u6570\u636E";
            },
            valueType: "dateTime"
          }, {
            title: "\u533A\u57DF",
            dataIndex: "province",
            width: 100,
            valueType: "select",
            fieldProps: {
              options: ke()
            }
          }, {
            title: "\u51FA\u884C\u76EE\u7684",
            dataIndex: "purpose",
            width: 100,
            valueType: "select",
            fieldProps: {
              options: [{
                label: "\u89C2\u5149/\u6E38\u89C8",
                value: "\u89C2\u5149/\u6E38\u89C8"
              }, {
                label: "\u4F11\u95F2/\u5EA6\u5047",
                value: "\u4F11\u95F2/\u5EA6\u5047"
              }, {
                label: "\u5176\u4ED6",
                value: "\u5176\u4ED6"
              }, {
                label: "\u5546\u52A1",
                value: "\u5546\u52A1"
              }, {
                label: "\u63A2\u4EB2\u8BBF\u53CB\t",
                value: "\u63A2\u4EB2\u8BBF\u53CB\t"
              }]
            }
          }, {
            title: "\u662F\u5426\u5728\u5916\u8FC7\u591C",
            dataIndex: "overnight",
            width: 60,
            fieldProps: {
              options: [{
                label: "\u662F",
                value: "\u662F"
              }, {
                label: "\u5426",
                value: "\u5426"
              }]
            },
            valueType: "select"
          }, {
            title: "\u5728\u5916\u8FC7\u591C\u5929\u6570",
            search: false,
            dataIndex: "overnightDays",
            width: 60,
            valueType: "digit"
          }, {
            title: "\u5305\u542B\u4EBA\u6570",
            search: false,
            dataIndex: "numPeople",
            width: 60,
            valueType: "digit"
          }, {
            title: "\u6B64\u6B21\u51FA\u884C\u7684\u82B1\u8D39\u603B\u989D",
            search: false,
            dataIndex: "totalCost",
            width: 80,
            valueType: "digit"
          }, {
            title: "\u957F\u9014\u4EA4\u901A\u82B1\u8D39",
            search: false,
            dataIndex: "longDistanceCost",
            width: 80,
            valueType: "digit"
          }, {
            title: "\u5E02\u5185\u4EA4\u901A\u82B1\u8D39",
            search: false,
            dataIndex: "localTransportCost",
            width: 80,
            valueType: "digit"
          }, {
            title: "\u4F4F\u5BBF\u82B1\u8D39",
            search: false,
            dataIndex: "accommodationCost",
            width: 80,
            valueType: "digit"
          }, {
            title: "\u9910\u996E\u82B1\u8D39",
            search: false,
            dataIndex: "diningCost",
            width: 80,
            valueType: "digit"
          }, {
            title: "\u6E38\u89C8\u548C\u5A31\u4E50\u82B1\u8D39",
            search: false,
            dataIndex: "entertainmentCost",
            width: 80,
            valueType: "digit"
          }, {
            title: "\u8D2D\u7269\u82B1\u8D39",
            search: false,
            dataIndex: "shoppingCost",
            width: 80,
            valueType: "digit"
          }, {
            title: "\u5176\u4ED6\u82B1\u8D39",
            search: false,
            dataIndex: "otherCost",
            width: 80,
            valueType: "digit"
          }, {
            title: "\u624B\u673A\u53F7",
            search: false,
            dataIndex: "phoneNumber",
            width: 100,
            valueType: "text"
          }, {
            title: "\u95EE\u5377\u6709\u6548\u6027",
            dataIndex: "display",
            width: 40,
            valueType: "select",
            fieldProps: {
              options: [{
                label: "\u662F",
                value: 1
              }, {
                label: "\u5426",
                value: 0
              }]
            }
          }, {
            title: "\u4EBA\u5747\u6D88\u8D39\u5927\u4E8E",
            dataIndex: "greater",
            width: 40,
            valueType: "text",
            hideInTable: true,
            hideInForm: true
          }, {
            title: "\u4EBA\u5747\u6D88\u8D39\u5C0F\u4E8E",
            width: 40,
            dataIndex: "less",
            valueType: "text",
            hideInTable: true,
            hideInForm: true
          }];
        }, [e, u]);
        return a;
      },
      ie = function () {
        var t = h()(i()().mark(function e(u) {
          var a, T, v;
          return i()().wrap(function (l) {
            for (;;) switch (l.prev = l.next) {
              case 0:
                if (!(!u || u.length === 0)) {
                  l.next = 2;
                  break;
                }
                return l.abrupt("return", true);
              case 2:
                if (a = x.ZP.loading("\u5904\u7406\u4E2D..."), l.prev = 3, T = u.filter(function (y) {
                  return y.display === 1;
                }), v = u.filter(function (y) {
                  return y.display === 0;
                }), !(T.length > 0)) {
                  l.next = 10;
                  break;
                }
                return l.next = 9, we({
                  id: T.map(function (y) {
                    return y.id;
                  }),
                  table_name: "202408"
                });
              case 9:
                x.ZP.success("Deleted successfully");
              case 10:
                if (!(v.length > 0)) {
                  l.next = 14;
                  break;
                }
                return l.next = 13, Te({
                  id: v.map(function (y) {
                    return y.id;
                  }),
                  table_name: "202408"
                });
              case 13:
                x.ZP.success("Recovered successfully");
              case 14:
                return a(), l.abrupt("return", true);
              case 18:
                return l.prev = 18, l.t0 = l.catch(3), a(), x.ZP.error("Operation failed, please try again"), l.abrupt("return", false);
              case 23:
              case "end":
                return l.stop();
            }
          }, e, null, [[3, 18]]);
        }));
        return function (u) {
          return t.apply(this, arguments);
        };
      }(),
      Ye = function () {
        var e = (0, m.useState)(false),
          u = j()(e, 2),
          a = u[0],
          T = u[1],
          v = (0, m.useState)(true),
          C = j()(v, 2),
          l = C[0],
          y = C[1],
          q = (0, m.useState)(false),
          Z = j()(q, 2),
          w = Z[0],
          G = Z[1],
          _ = (0, m.useState)(0),
          M = j()(_, 2),
          I = M[0],
          ee = M[1],
          R = (0, m.useRef)(),
          ae = (0, m.useState)([]),
          N = j()(ae, 2),
          P = N[0],
          O = N[1],
          te = function () {
            G(!w);
          },
          z = function () {
            var o = h()(i()().mark(function d() {
              var f, S, B;
              return i()().wrap(function (E) {
                for (;;) switch (E.prev = E.next) {
                  case 0:
                    return E.next = 2, ie(P);
                  case 2:
                    f = E.sent, f && (O([]), (S = R.current) === null || S === undefined || (B = S.reloadAndRest) === null || B === undefined || B.call(S), ee(function (de) {
                      return de + 1;
                    }));
                  case 4:
                  case "end":
                    return E.stop();
                }
              }, d);
            }));
            return function () {
              return o.apply(this, arguments);
            };
          }(),
          re = function (d) {
            var f;
            y(d), (f = R.current) === null || f === undefined || f.reload();
          };
        (0, m.useEffect)(function () {
          a && window.dispatchEvent(new Event("resize"));
        }, [a]);
        var le = Je(ie, l),
          c = (0, Be.T8)({
            columns: le
          }),
          b = c.components,
          p = c.resizableColumns,
          $ = c.tableWidth,
          r = (0, g.useIntl)(),
          oe = function (d) {
            var f = {};
            d.forEach(function (S) {
              S.province && (f[S.province] = (f[S.province] || 0) + 1);
            });
          };
        return (0, n.jsxs)(Ae._z, {
          children: [(0, n.jsx)(Ee.Z, {
            headerTitle: r.formatMessage({
              id: "pages.searchTable.title",
              defaultMessage: "Enquiry form"
            }),
            actionRef: R,
            rowKey: "id",
            search: {
              labelWidth: 120
            },
            request: function () {
              var o = h()(i()().mark(function d(f, S) {
                var B, H, E;
                return i()().wrap(function (F) {
                  for (;;) switch (F.prev = F.next) {
                    case 0:
                      return F.next = 2, ye(f, {
                        sorter: S,
                        table_name: "202408"
                      });
                    case 2:
                      return H = F.sent, E = l ? H.data : (B = H.data) === null || B === undefined ? undefined : B.filter(function (ne) {
                        return ne.display === 1;
                      }), oe(E.filter(function (ne) {
                        return ne !== undefined;
                      })), F.abrupt("return", D()(D()({}, H), {}, {
                        data: E
                      }));
                    case 6:
                    case "end":
                      return F.stop();
                  }
                }, d);
              }));
              return function (d, f) {
                return o.apply(this, arguments);
              };
            }(),
            columns: p,
            components: b,
            scroll: {
              x: $
            },
            rowSelection: {
              onChange: function (d, f) {
                O(f);
              }
            },
            rowClassName: function (d) {
              return d.display === 0 ? "hidden-row" : "";
            },
            toolbar: {
              actions: [(0, n.jsxs)("div", {
                children: [(0, n.jsx)("span", {
                  style: {
                    marginRight: 8
                  },
                  className: l ? "red-bold" : "",
                  children: "\u65E0\u6548\u9879\u4EE5\u7EA2\u8272\u663E\u793A"
                }), (0, n.jsx)(Fe.Z, {
                  checked: l,
                  onChange: re
                })]
              }, "showHiddenToggle"), (0, n.jsx)(se.ZP, {
                type: "primary",
                onClick: te,
                children: "\u663E\u793A\u6C47\u603B\u8868\u5355"
              }, "toggleDrawer")]
            }
          }), (P == null ? undefined : P.length) > 0 && (0, n.jsx)(xe.S, {
            extra: (0, n.jsxs)("div", {
              children: [(0, n.jsx)(g.FormattedMessage, {
                id: "pages.searchTable.chosen",
                defaultMessage: "Chosen"
              }), " ", (0, n.jsx)("a", {
                style: {
                  fontWeight: 600
                },
                children: P.length
              }), " ", (0, n.jsx)(g.FormattedMessage, {
                id: "pages.searchTable.item",
                defaultMessage: "\u9879"
              })]
            }),
            children: (0, n.jsx)(se.ZP, {
              type: "primary",
              onClick: z,
              children: "\u8BBE\u4E3A\u65E0\u6548\u6216\u6062\u590D"
            })
          }), (0, n.jsxs)(Ie.Y, {
            children: [(0, n.jsx)(Pe.Z, {
              rules: [{
                required: true,
                message: (0, n.jsx)(g.FormattedMessage, {
                  id: "pages.searchTable.ruleName",
                  defaultMessage: "Rule name is required"
                })
              }],
              width: "md",
              name: "name"
            }), (0, n.jsx)($e.Z, {
              width: "md",
              name: "desc"
            })]
          }), (0, n.jsxs)(Ze.Z, {
            width: 400,
            open: w,
            onClose: function () {
              G(false);
            },
            closable: false,
            children: [(0, n.jsx)(ze, {}, I), " "]
          })]
        });
      },
      Qe = Ye;
  }
}]);
a;