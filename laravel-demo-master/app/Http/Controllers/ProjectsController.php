<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Project;

class ProjectsController extends Controller
{

    public function listProjects() {

        $projects = Project::all();

        dump($projects);


        
        return view('projects',['projects' => $projects]);

    }

    public function deleteProject($id) {

    }
}
