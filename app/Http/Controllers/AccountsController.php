<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class AccountsController extends Controller
{
    /**
     * 設定[アカウント] 一覧画面表示
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return view('accounts.index');
    }

    /**
     * 設定[アカウント] 新規作成画面表示
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('accounts.create');
    }

    /**
     * 設定[アカウント] 新規登録
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return redirect()->route('accounts.index');
    }

    /**
     * 設定[アカウント] 編集画面
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, User $user)
    {
        return view('accounts.edit');
    }

    /**
     * 設定[アカウント] 更新
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        return redirect()->route('accounts.index');
    }

    /**
     * 設定[アカウント] 削除
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        return redirect()->route('accounts.index');
    }

    // 設定[アカウント] 新規確認画面
    public function createConfirm(Request $request)
    {
        return view('accounts.create_confirm');
    }

    // 設定[アカウント] 編集確認画面
    public function editConfirm(Request $request, User $user)
    {
        return view('accounts.edit_confirm');
    }
}
