/** Travel times to Vancouver for Hyperloop vs other modes of transportation
 *
 * Source: https://hyperloop-one.com/route-estimator/
 * Time to decimal conversion: https://www.calculatorsoup.com/calculators/time/time-to-decimal-calculator.php
 */

const hyperloopTravelData = [
  {
    transportMode: 'Hyperloop',
    time: 2.3833,
  },
  {
    transportMode: 'Airplane',
    time: 5.5,
  },
  {
    transportMode: 'High Speed Rail',
    time: 9.5167,
  },
  {
    transportMode: 'Rail',
    time: 12.75,
  },
  {
    transportMode: 'Car',
    time: 24.85,
  },
];

export default hyperloopTravelData;
