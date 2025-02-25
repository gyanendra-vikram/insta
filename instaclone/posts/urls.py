from django.urls import path
from .views import PostListCreateView, PostDetailView, LikeListCreateView, CommentListCreateView

urlpatterns = [
    path('posts/', PostListCreateView.as_view(), name='post-list'),
    path('posts/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('likes/', LikeListCreateView.as_view(), name='like-list'),
    path('comments/', CommentListCreateView.as_view(), name='comment-list'),
]
