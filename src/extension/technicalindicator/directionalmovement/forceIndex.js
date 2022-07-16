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
 * FI：强力指标，
 * 默认参数值2、13。
 * 公式：⒈ 首先每天的量价指数：volume*(close-ref(close,1))
 * ⒉分别计算出收盘价2日量价指数平滑移动平均线与13日量价指数平滑移动平均线，分别记为FI(2）与FI(13）。
 */
export default {
  name: 'FI',
  shortName: 'FI',
  calcParams: [2, 13],
  plots: [
    { key: 'fiShort', title: 'FI2: ', baseValue: 0, type: 'line' },
    { key: 'fiLong', title: 'FI13: ', baseValue: 0, type: 'line' }
  ],
  calcTechnicalIndicator: (dataList, { params }) => {
    let fiShort
    let fiLong
    return dataList.map((kLineData, i) => {
      const fi = {}
      const close = kLineData.close
      const preClose = (dataList[i - 1] || kLineData).close
      const volume = kLineData.volume
      if (i > 0) {
        fiShort = (2 * volume * (close - preClose) + (params[0] - 1) * fiShort) / (params[0] + 1)
        fiLong = (2 * volume * (close - preClose) + (params[1] - 1) * fiLong) / (params[1] + 1)
      } else {
        fiShort = volume * (close - preClose)
        fiLong = volume * (close - preClose)
      }
      fi.fiShort = fiShort
      fi.fiLong = fiLong
      return fi
    })
  }
}
