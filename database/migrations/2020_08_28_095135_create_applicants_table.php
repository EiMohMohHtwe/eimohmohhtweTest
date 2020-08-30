<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('profile_img');
            $table->string('sex');
            $table->integer('birthday');
            $table->string('address');
            $table->string('phone');
            $table->string('email');
            $table->string('confirm_email');
            $table->string('blood_type');
            $table->string('personality');
            $table->string('strength');
            $table->string('weakness');
            $table->string('hobby');
            $table->string('favorite_subject');
            $table->tinyInteger('cooking');
            $table->tinyInteger('group_life_experience');
            $table->string('eye_sight_left');
            $table->string('eye_sight_right');
            $table->tinyInteger('color_blindness');
            $table->tinyInteger('tatoo');
            $table->tinyInteger('drinking');
            $table->tinyInteger('smoking');
            $table->tinyInteger('medical_history');
            $table->string('medical_history_text');
            $table->date('jhs_period_from');
            $table->date('jhs_period_to');
            $table->string('jhs_school_name');
            $table->string('jhs_faculty_department');
            $table->tinyInteger('jhs_status');
            $table->date('hs_period_from');
            $table->date('hs_period_to');
            $table->string('hs_school_name');
            $table->string('hs_faculty_department');
            $table->tinyInteger('hs_status');
            $table->date('univ_period_from');
            $table->date('univ_period_to');
            $table->string('univ_school_name');
            $table->string('univ_faculty_department');
            $table->tinyInteger('univ_status');
            $table->tinyInteger('univ_school_year');
            $table->string('upload_dir');
            $table->string('question_happiest_event');
            $table->string('question_hardest_event');
            $table->string('question_worked_hard');
            $table->string('question_outside_of_school');
            $table->string('question_future_workplace');
            $table->string('question_poor_person');
            $table->string('question_emphasis');
            $table->string('question_weak');
            $table->string('question_specialty');
            $table->string('question_it_technology');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applicants');
    }
}
