/*
 * @Author: Euan Millar 
 * @Date: 2017-07-05 01:18:48 
 * @Last Modified by: Euan Millar
 * @Last Modified time: 2017-09-05 13:41:25
 */
import React from 'react';
import styles from './styles.css';
import StaffCard from 'components/StaffCard';
import TrackerDetails from 'components/TrackerDetails';
import Input from 'react-toolbox/lib/input';
import theme from './searchInput.css';
import { Button } from 'react-toolbox/lib/button';
import { connect } from 'react-redux';

class TrackingSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  checkStatus = (event) => {
    this.props.onCaseTrackingClick();
  }
  
  clear = (event) => {
    this.props.onCaseTrackingClear();
  }

  render = () => {
    const { managerView, caseData, caseManager } = this.props;
   
    return (
      <div className={styles.list}>
        <div className={styles.searchContainer + ' pure-g'}>
          <div className="pure-u-1">
            <form>
              <Input theme={theme} type="text" label="BD-F08IDBIU" icon="search" />
              <div className="pure-g">
                <div className="pure-u-1-2">
                  <Button icon="search" label="Check Status" flat onClick={this.checkStatus} />
                </div>
                <div className="pure-u-1-2">
                  <Button icon="clear" label="Clear" flat onClick={this.clear} />
                </div>

              </div>
            </form>
          </div>
        </div>
        {caseData && <TrackerDetails caseData={caseData}/>}
        {caseManager && <StaffCard cardType="M" managerData={caseManager}/> }
      </div>
    );
  }
}

   


const mapStateToProps = ({  
  managerReducer}) => {
  const { 
    caseData,
    caseManager,
  } = managerReducer;
  
  return {
    caseData,
    caseManager,
  };
};


export default connect(mapStateToProps, null)(TrackingSearchContainer);



