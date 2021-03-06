import React from 'react';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import Typography from '@material-ui/core/Typography';
import { pickCardColor } from '../utils/functions';
import { bannedCards, restrictedCards } from '../data/index';

const RestrictedBannedCardsCount = ({ banned, restricted, style }) => (
    <div style={{ ...style, display: 'flex', alignItems: 'center', }}>
    {
        banned > 0 && (
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <ReportProblemIcon style={{color: pickCardColor(Object.keys(bannedCards)[0])}} />
                <Typography style={{ color: pickCardColor(Object.keys(bannedCards)[0])}}>{banned}</Typography>
            </div>
        )
    }
    {
        restricted > 0 && (
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <ReportProblemIcon style={{color: pickCardColor(Object.keys(restrictedCards)[0])}} />
                <Typography style={{ color: pickCardColor(Object.keys(restrictedCards)[0])}}>{restricted}</Typography>
            </div>
        )
    }
    </div>
)

export default RestrictedBannedCardsCount;