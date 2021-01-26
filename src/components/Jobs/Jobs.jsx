import React, {useEffect} from 'react'
import {useFetch} from "hooks/useFetch";
import {JOBS} from "modules/api/endpoints";
import Navigation from "components/common/Navigation";

export const Jobs = () => {

    const {response, performFetch} = useFetch(JOBS)
    const {loading, data } = response

    useEffect(() => {
        performFetch()
    }, [performFetch])

    return <Navigation loading={loading} services={data} title={'React Redux Redux-Saga MaterialUI'} />
}
