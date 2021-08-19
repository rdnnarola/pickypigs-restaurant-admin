let mydata = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const daycalculate = (zzzzz) => {
  var data2 = zzzzz.map(function (day) {
    return mydata.indexOf(day) + 1;
  });
  let data = data2.sort();
  let str = "";

  data.forEach((item, index, arr) => {
    if (index === 0 || item !== data[index - 1] + 1) {
      str += mydata[item - 1] + "-";
    }
    if (index === data.length - 1) {
      str += mydata[item - 1];
    } else if (data[index + 1] !== item + 1) {
      str += mydata[item - 1] + " and ";
    }
  });
  var last = str.lastIndexOf("and");
  // eslint-disable-next-line no-useless-escape
  var butLast = str.substring(0, last).replace(/\and/g, ",");
  str = butLast + str.substring(last);
  // str=[...new Set(str.split(' '))].join(' ');
  // str=str.replace(/- a/g,'a')
  // str=str.replace(/- , /g,',')
  // eslint-disable-next-line no-useless-escape
  str = str.replace(/(\b\w+\b)-(?=.*\1)/g, "").trim();
  return str;
};

export default daycalculate;
