import React, { Component } from 'react';

import { seeds } from '../data/seeds';
import { getSowDate } from '../utils/calendar';

export default class App extends Component {
    render () {
        const seedData = seeds.map((seed, index) => {
            const firstPossibleSowDate = getSowDate(seed.daysFromSeedToLastFrost[1]);
            const lastPossibleSowDate = getSowDate(seed.daysFromSeedToLastFrost[0]);
            return (
                <div key={`seed-${index}`}>
                    {!seed.isDirectSow ? (
                        <div>
                            <div>{seed.name}</div>
                            {firstPossibleSowDate === lastPossibleSowDate ? (
                                <div>
                                    Sow on {firstPossibleSowDate}
                                </div>
                            ) : (
                                <div>
                                    Sow in between {firstPossibleSowDate} and {lastPossibleSowDate}
                                </div>
                            )}
                            <div>
                            </div>
                            <br/>
                        </div>
                    ) : (
                        <div>
                            <div>{seed.name}</div>
                            <div>Sow Directly in between: {getSowDate(seed.daysFromSeedToLastFrost[1])} and {getSowDate(seed.daysFromSeedToLastFrost[0])}</div>
                            <br/>
                        </div>
                    )}
                </div>
            );
        });
        return (
            <div>{seedData}</div>
        );
    }
}