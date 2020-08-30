@extends('layouts.base')

{{-- head title  --}}
@section('title')アカウント 入力確認画面@endsection

@section('content')
    <section>
        <div class="block">
            <div class="breadcrumb">
                <div class="breadcrumb_inner">
                    <h2 class="breadcrumb_inner_text">
                        <i class="fas fa-tools fa-lg fa-fw"></i> @yield('title')
                    </h2>
                </div>
            </div>
            <div class="inner">
                <form id="createAccountForm" method="POST" action="">
                    @csrf
                    <input type="hidden" name="login_code" value="{{ $user->login_code }}">
                    <input type="hidden" name="name" value="{{ $user->name }}">
                    <input type="hidden" name="password" value="{{ $user->password }}">
                    <input type="hidden" name="authority" value="{{ $user->authority }}">

                    <div class="block block-marginCenter block-spaceL" style="width: 500px;">
                        <table class="table table-form table-conf">
                            <colgroup span="1" style="width: 200px;"></colgroup>
                            <tbody>
                                <tr>
                                    <th colspan="2" class="table_title">ログインID</th>
                                    <td class="table_data">{{ $user->login_code }}</td>
                                </tr>
                                <tr>
                                    <th colspan="2" class="table_title">名前</th>
                                    <td class="table_data">{{ $user->name }}</td>
                                </tr>
                                <tr>
                                    <th colspan="2" class="table_title">パスワード</th>
                                    <td class="table_data">******</td>
                                </tr>
                                <tr>
                                    <th colspan="2" class="table_title">権限</th>
                                    <td class="table_data"></td>
                                </tr>
                            </tbody>
                        </table>
                        <ul class="block block-positionCenter block-spaceM cf">
                            <li class="btn btn-color4 btn-button btn-inline">
                                <button type="submit" name="back" value="戻る" class="btn_link btn_link-icon btn_link-iconBack" tabindex="1">戻る</button>
                            </li>
                            <li class="btn btn-button btn-inline btn-leftSpaceL">
                                <button id="createAccount" type="submit" name="send" value="登録" class="btn_link btn_link-icon btn_link-iconPen" tabindex="1">登録</button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </section>
@endsection

@section('script')
<script>
$(function () {
    $('#createAccount').click(function() {
        $(this).attr('disabled', true);
        $('#createAccountForm').submit();
    });
});
</script>
@endsection
