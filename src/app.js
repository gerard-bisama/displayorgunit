import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import {GetAjaxRequest} from "./api"


import NavigationBar from './components/NavigationBar';
import Layout from './components/Layout'
import Browse from './pages/Browse';
//import Home from './pages/Home';
//import Edit from './pages/Edit';
//import Help from './pages/Help';
//import { handleLoadAllUnits } from "./actions/Actions";

console.log('----------------call-------------------');
GetAjaxRequest(function(data)
{
	console.log("--------return----------");
	//console.log(data);
	document.body.innerHTML = JSON.stringify(data);
});
