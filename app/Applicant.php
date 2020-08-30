<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    protected $fillable = [
        'name', 'sex', 'birthday', 'address','phone','email','confirm_email','blood_type',
        'Personaily','strength','weakness','hobby','favorite_subject','cooking','group_life_experience',
        'eye_sight_left','eye_sight_right','color_blindness','tatoo','drinking','smoking','medical_history',
        'medical_history_text','jhs_period_from','jhs_period_to','jhs_school_name','jhs_faculty_department',
        'jhs_status','hs_period_from','hs_period_to','hs_school_name','hs_faculty_department','hs_status',
        'univ_period_from','univ_period_to','univ_school_name','univ_faculty_department','univ_status',
        'univ_school_year','upload_dir','question_happiest_event','question_hardest_event','question_worked_hard',
        'question_outside_of_school','question_future_workplace','question_poor_person','question_emphasis',
        'question_weak','question_specialty','question_it_technology'
    ];
}
