@if ($paginator->hasPages())
<div class="pager pager-spaceM">
    <ul class="pager_list cf">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="pager_item">
                <a class="prev pager_item_prevNone">前へ</a>
            </li>
        @else
            <li class="pager_item">
                <a class="prev page_item_num" href="{{ $paginator->previousPageUrl() }}">前へ</a>
            </li>
        @endif

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <li class="pager_item">
                    <a class="page_item_num">{{ $element }}</a>
                </li>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <li class="pager_item">
                            <span class="page_item_num current">{{ $page }}</span>
                        </li>
                    @else
                        <li class="pager_item">
                            <a class="page_item_num" href="{{ $url }}">{{ $page }}</a>
                        </li>
                    @endif
                @endforeach
            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li class="pager_item">
                <a class="next page_item_num" href="{{ $paginator->nextPageUrl() }}">次へ</a>
            </li>
        @else
            <li class="pager_item">
                <a class="next pager_item_nextNone">次へ</a>
            </li>
        @endif
    </ul>
</div>
@endif
