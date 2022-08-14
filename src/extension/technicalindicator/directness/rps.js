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
 * 相对强度
 */
export default {
  name: 'RPS',
  shortName: 'RPS',
  calcParams: [],
  precision: 0,
  shouldCheckParamCount: false,
  plots: [
    { key: 'rps50', title: 'RPS50: ', type: 'line' },
    { key: 'rps120', title: 'RPS120: ', type: 'line' },
    { key: 'rps250', title: 'RPS250: ', type: 'line' }
  ],
  calcTechnicalIndicator: (dataList, { params, plots }) => {
    return dataList.map((kLineData, i) => {
      if (kLineData.rps === undefined) {
        kLineData.rps = {}
      }
      return kLineData.rps
    })
  }
}
