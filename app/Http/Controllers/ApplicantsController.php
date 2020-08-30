<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ApplicantsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return view('applicants.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('applicants.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required', 'birthday' => 'required','profile_img' => 'required',
            'address' => 'required','phone' => 'required', 'email' => 'required|email|unique:users',
            'confirm_email' => 'required','blood_type' => 'required', 'Personaily' => 'required',
            'strength' => 'required', 'weakness' => 'required', 'hobby' => 'required',
            'favorite_subject' => 'required', 'medical_history_text' => 'required',
            'jhs_period_from' => 'required', 'jhs_period_to' => 'required', 'jhs_school_name' => 'required',
            'jhs_faculty_department' => 'required', 'jhs_status' => 'required',
            'hs_period_from' => 'required','hs_period_to' => 'required',' hs_school_name' => 'required',
            'hs_faculty_department' => 'required', 'hs_status' => 'required',
            'univ_period_from' => 'required', 'univ_period_to' => 'required','univ_school_name' => 'required',
            'univ_faculty_department' =>  'required','univ_status' => 'required', 'univ_school_year' => 'required',
            'upload_dir' => 'required', 'question_happiest_event' => 'required|max:500', 'question_hardest_event' => 'required|max:500',
            'question_worked_hard' => 'required|max:500', 'question_outside_of_school' => 'required|max:500', 
            'question_future_workplace' => 'required|max:500', 'question_poor_person' => 'required|max:500',
            'question_emphasis' => 'required|max:500','question_weak' => 'required|max:500', 'question_specialty'  => 'required|max:500',
            'question_it_technology'  => 'required|max:500'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view('applicants.show');
    }

    /**
     * Confirm page before store
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function confirm(Request $request)
    {
        return view('applicants.confirm');
    }
}
