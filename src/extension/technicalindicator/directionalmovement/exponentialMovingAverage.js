/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * EMA 指数移动平均
 */
export default {
  name: 'EMA',
  shortName: 'EMA',
  series: 'price',
  calcParams: [13, 26],
  precision: 2,
  shouldCheckParamCount: false,
  shouldOhlc: true,
  plots: [
    { key: 'emaShort', title: 'EMA13: ', type: 'line' },
    { key: 'emaLong', title: 'EMA26: ', type: 'line' },
    { key: 'up', title: 'Up: ', type: 'line' },
    { key: 'bo', title: 'Bottom: ', type: 'line' }
  ],
  regeneratePlots: (params) => {
    return params.map(p => {
      return { key: `ema${p}`, title: `EMA${p}: `, type: 'line' }
    })
  },
  calcTechnicalIndicator: (dataList, { params, plots }) => {
    const emaValues = []
    const kk = dataList.map((kLineData, i) => {
      const ema = {}
      const close = kLineData.close
      params.forEach((p, index) => {
        if (i > 0) {
          emaValues[index] = (2 * close + (p - 1) * emaValues[index]) / (p + 1)
        } else {
          emaValues[index] = close
        }
        ema[plots[index].key] = emaValues[index]
      })
      kLineData.ema = ema
      return ema
    })
    let r = 0.2
    if (dataList.length >= 100) {
      var arr = []
      for (var i = dataList.length - 100; i < dataList.length; i++) {
        if (dataList[i].close < kk[i]['emaLong']) {
          arr.push(kk[i]['emaLong'] / dataList[i].close - 1)
        } else {
          arr.push(1 - kk[i]['emaLong'] / dataList[i].close)
        }
      }
      arr.sort()
      r = 0
      for (var i = 85; i < 100; i++) {
        r = r + arr[i]
      }
      r = r / 15;
      for (var i = 86; i < 100; i++) {
        if (r <= arr[i] && r > arr[i-1]) {
          r = arr[i]
          break
        }
      }
      // 至少5个元素
      if (r > arr[95]) {
        r = arr[95]
      }
      // 至多10个元素
      if (r < arr[90]) {
        r = arr[90]
      }
    }
    var e
    for (var i = 0; i < kk.length; i++) {
      e = kk[i]['emaLong']
      kk[i]['up'] = e * (1 + r)
      kk[i]['bo'] = e * (1 - r)
    }
    return kk
  }
}
