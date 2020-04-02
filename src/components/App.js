import React, { Component } from 'react';

import { seeds } from '../data/seeds';
import { formatDate, getSowDate, getGerminationDate } from '../utils/calendar';

export default class App extends Component {
    render () {
        const seedData = seeds.map((seed, index) => {
            const { daysFromSeedToLastFrost, daysToGermination } = seed;
            const firstPossibleSowDate = getSowDate(daysFromSeedToLastFrost[1]);
            const lastPossibleSowDate = getSowDate(daysFromSeedToLastFrost[0]);
            const firstPossibleGerminationDate = getGerminationDate(firstPossibleSowDate, daysToGermination[1]);
            const lastPossibleGerminationDate = getGerminationDate(lastPossibleSowDate, daysToGermination[0]);
            return (
                <div key={`seed-${index}`}>
                    <div>{seed.name}</div>
                    {!seed.isDirectSow ? (
                        <div>
                            {firstPossibleSowDate === lastPossibleSowDate ? (
                                <div>
                                    Sow on {formatDate(firstPossibleSowDate)}
                                </div>
                            ) : (
                                <div>
                                    Sow: {formatDate(firstPossibleSowDate)} - {formatDate(lastPossibleSowDate)}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <div>Sow Directly: {formatDate(firstPossibleSowDate)} - {formatDate(lastPossibleSowDate)}</div>
                        </div>
                    )}
                    <div>
                        Germination: {formatDate(firstPossibleGerminationDate)} - {formatDate(lastPossibleGerminationDate)}
                    </div>
                    <br/>
                </div>
            );
        });
        return (
            <div>{seedData}</div>
        );
    }
}