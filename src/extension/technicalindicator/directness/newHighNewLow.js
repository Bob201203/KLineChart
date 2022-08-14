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
 * NHNL 指数新高新低
 */
export default {
  name: 'NHNL',
  shortName: 'NHNL',
  calcParams: [],
  precision: 0,
  shouldCheckParamCount: false,
  plots: [
    { key: 'nhnl', title: 'NHNL: ', type: 'line' },
    { key: 'z', title: 'ZERO: ', type: 'line' }
  ],
  calcTechnicalIndicator: (dataList, { params, plots }) => {
    return dataList.map((kLineData, i) => {
      if (kLineData.nhnl === undefined) {
        kLineData.nhnl = {}
      }
      return kLineData.nhnl
    })
  }
}
