
import StrikePricesPanel from './StrikePricesPanel';
import DepositStatsPanel from './DepositStatsPanel';
import DepositActionPanel from './DepositActionPanel';

const DepositTabContent = () => {
  return (
    <div className='space-y-4'>
      <StrikePricesPanel />
      <DepositStatsPanel />
      <DepositActionPanel />
    </div>
  );
};

export default DepositTabContent;
