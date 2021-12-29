import React, {FC} from 'react';
import Rootpage from "../root/root"
import { FilterPanel } from '../../components/filterPanel/FilterPanel';
import { AvailableTest } from '../../components/availableTest/availableTest';
import { ResultsHeader } from '../../components/resultsHeader/resultsHeader';
const Home: FC = (props) => {
    return (
        <Rootpage>
            <FilterPanel/>
            <ResultsHeader/>
            <AvailableTest />
        </Rootpage>
    )
}

export default Home;