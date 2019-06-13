/** Travel times to Vancouver for Hyperloop vs other modes of transportation
 *
 * Source: https://hyperloop-one.com/route-estimator/
 * Time to decimal conversion: https://www.calculatorsoup.com/calculators/time/time-to-decimal-calculator.php
 */

const hyperloopTravelData = [
  {
    transportMode: 'HPL',
    time: 3,
  },
  {
    transportMode: 'Air',
    time: 6,
  },
  {
    transportMode: 'HSR',
    time: 10,
  },
  {
    transportMode: 'Rail',
    time: 13,
  },
  {
    transportMode: 'Car',
    time: 25,
  },
];

export default hyperloopTravelData;
