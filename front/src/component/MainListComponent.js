/** @format */

import useStores from '../hooks/useStores';
import { useObserver } from 'mobx-react';
import React, { Component, useEffect, useState, useCallback } from 'react';

const MainListComponent = ({ list, index }) => {
    useEffect(() => {
        console.log('list:', list, index);
    }, []);
    return useObserver(() => {
        return <div>{list.title}</div>;
    });
};
export default MainListComponent;
