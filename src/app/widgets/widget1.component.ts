import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'widget-1',
    template: `
        <h1>Senwes Limited</h1>        
        <table class="table table-striped table-responsive">
            <thead>
                <tr>
                    <th class="w-25">No</th>
                    <th class="w-50">Subsidiary</th>   
                    <th class="w-25">Net Cash Balance</th>         
                    <th class="w-25"></th>  
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">4071020479</th>
                    <td>Oos-Transvaal Kalkverskaffers (Pty) Ltd</td>
                    <td>
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>             
                    </td>
                    <td>
                        <button routerLink="/portlets" type="button" class="btn btn-secondary">View more</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">4071020490</th>
                    <td>Senwesbel Limited</td>
                    <td>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>             
                    </td>
                    <td>
                        <button routerLink="/treasurerdashboard-portlet-netcash" type="button" class="btn btn-secondary">View more</button>
                    </td>                    
                </tr>
                <tr>
                    <th scope="row">4071020502</th>
                    <td>Univision Broker Services</td>
                    <td>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>             
                    </td>
                    <td>
                        <button routerLink="/treasurerdashboard-portlet-netcash" type="button" class="btn btn-secondary">View more</button>
                    </td>                    
                </tr>
                
            </tbody>
        </table>

    `
})

export class Widget1Component {
    constructor(){ }	    
}

